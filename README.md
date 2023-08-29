
# slugify strings

This action accepts any string, and outputs a slugify version of that string

You can access the outputted strings through the job outputs context. See docs [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjobs_idoutputs)

## Inputs

Field | Required | Default | Description
--- | --- | --- | ---
`string` | true | "Hello World!" | The string to slugify
`prefix` | false | "" | A prefix to add to the slugified string (e.g. `prefix: "v"` -> `v-hello-world`)
`suffix` | false | "" | A suffix to add to the slugified string (e.g. `suffix: "v"` -> `hello-world-v`)
`forcePrefix` | false | false | If true, the prefix will be added even if the string is empty (e.g. `prefix: "hello"` -> `hellohello-world`)
`forceSuffix` | false | false | If true, the suffix will be added even if the string is empty (e.g. `suffix: "world"` -> `hello-worldworld`
`slugify` | false | true | If false, the string will not be slugified (e.g. `slugify: false` -> `Hello World!`)
outputLength | false | "0" | Passed as a string, If greater than 0, the slugified string will be truncated to the specified length (e.g. `outputLength: "5"` -> `hello`)
`outputCase` | false | "lower" | The case of the outputted string. Can be "lower", "upper", or "capitalize" (e.g. `outputCase: "upper"` -> `HELLO-WORLD`)

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

## Flowchart

``` mermaid
graph TB;
    A[Input] --> |if slugify == 'true'| B[Slugify];
    A --> |if slugify == 'false'| C[Add prefix and suffix];
    B --> C;
    C --> D[output length];
    D --> E[output case];
    E --> F[Output];
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
