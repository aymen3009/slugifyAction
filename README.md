
# slugify strings

This action accepts any string, and outputs a slugify version of that string

You can access the outputted strings through the job outputs context. See docs [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjobs_idoutputs)

## Inputs

### `string`

**Required** The string you want manipulated

## Outputs

### `slug`

Example: `Xy Zz Y/y` -> `xy-zz-yy`

## Example Usage

### Inside the same job

```yaml

on: [push]
jobs:
  print-slugify-branch-name:
    name: Print slugified branch name
    runs-on: ubuntu-latest
    steps:
      - id: slugify
        uses: aymen3009/slugifyAction@main
        with:
          string: ${{ github.ref_name }}
      - id: step2
        run: echo ${{ steps.slugify.outputs.slug }}
```

### across jobs

```yaml
on: [push]

jobs:
    slugify-branch-name:
        name: Slugify branch name
        runs-on: ubuntu-latest
        steps:
            - uses: aymen3009/slugifyAction@main
              id: slugify
              with:
                  string: ${{ github.ref_name }}
            - run: echo ${{ steps.slugify.outputs.slug }}
        outputs:
            slug: ${{ steps.slugify.outputs.slug }}
    print-slug:
        name: Print slug
        runs-on: ubuntu-latest
        needs: slugify-branch-name
        steps:
            - run: echo ${{ needs.slugify-branch-name.outputs.slug }}
```
