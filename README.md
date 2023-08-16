#slugify strings

This action accepts any string, and outputs a slugify version of that string

You can access the outputted strings through the job outputs context. See docs [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjobs_idoutputs)

## Inputs

### `string`

**Required** The string you want manipulated

## Outputs

### `slug`

Example: `Xy Zz Y/y` -> `xy-zz-yy`

## Example Usage

```yaml
name: SomeWorkflow
on: [push]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - id: string
        uses: aymen3009/slugifyAction@v1
        with:
          string: XyZzY
      - id: step2
        run: echo ${{ steps.string.outputs.slug }}