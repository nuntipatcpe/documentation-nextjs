export function menuBar() {
  let menu = [
    //Vscode
    {
      id: "Vscode",
      subMenu: [
        {
          name: "Setting Emmet",
          path: "/document/vscode-setting-emmet",
        },
        {
          name: "Extension",
          path: "/document/vscode-extension",
        },
      ],
    },
    //Git
    {
      id: "Git",
      subMenu: [
        {
          name: "Configure Global",
          path: "/document/git-configure-global",
        },
        {
          name: "Commit Message",
          path: "/document/git-commit-message",
        },
        {
          name: "Add and Clon File",
          path: "/document/git-add-clon-file",
        },
        {
          name: "Branch",
          path: "/document/git-branch",
        },
        {
          name: "Merge",
          path: "/document/git-merge",
        },
        {
          name: "Fetch",
          path: "/document/git-fetch",
        },
        {
          name: "Remode",
          path: "/document/git-remode",
        },
      ],
    },
    //Css
    {
      id: "Css",
      subMenu: [
        {
          name: "Reset",
          path: "/document/css-reset",
        },
        {
          name: "Scrollbar",
          path: "/document/css-scrollbar",
        },
        {
          name: "Unit",
          path: "/document/css-unit",
        },
        {
          name: "Fonts",
          path: "/document/css-fonts",
        },
        {
          name: "Colors",
          path: "/document/css-colors",
        },
        {
          name: "Text Decoration",
          path: "/document/css-text-decoration",
        },
        {
          name: "Text Align",
          path: "/document/css-text-align",
        },
        {
          name: "Border",
          path: "/document/css-border",
        },
        {
          name: "Margin and Padding",
          path: "/document/css-margin-padding",
        },
        {
          name: "Background",
          path: "/document/css-background",
        },
        {
          name: "Float and Clear",
          path: "/document/css-float-clear",
        },
        {
          name: "Link",
          path: "/document/css-link",
        },
        {
          name: "Position",
          path: "/document/css-position",
        },
        {
          name: "Layer",
          path: "/document/css-layer",
        },
        {
          name: "Link in page smooth",
          path: "/document/css-Link-page-smooth",
        },
        {
          name: "Overflow",
          path: "/document/css-overflow",
        },
        {
          name: "Cursor Stype",
          path: "/document/css-cursor-stype",
        },
        {
          name: "Box-shadow",
          path: "/document/css-box-shadow",
        },
        {
          name: "Media Query",
          path: "/document/css-media-query",
        },
      ],
    },
    //Javascript-ES6
    {
      id: "Javascript-ES6",
      subMenu: [
        {
          name: "Block Scope",
          path: "/document/javascript-es6-block-scope",
        },
        {
          name: "Arrow Function",
          path: "/document/javascript-es6-arrow-function",
        },
        {
          name: "Object",
          path: "/document/javascript-es6-object",
        },
        {
          name: "String",
          path: "/document/javascript-es6-string",
        },
        {
          name: "Spread Operator",
          path: "/document/javascript-es6-spread-operator",
        },
        {
          name: "Rest Parameter",
          path: "/document/javascript-es6-rest-parameter",
        },
        {
          name: "Destructionring",
          path: "/document/javascript-es6-destructionring",
        },
        {
          name: "Default Parameter",
          path: "/document/javascript-es6-default-parameter",
        },
        {
          name: "Array Function",
          path: "/document/javascript-es6-array-function",
        },
        {
          name: "Map Function",
          path: "/document/javascript-es6-map-function",
        },
        {
          name: "Filter Function",
          path: "/document/javascript-es6-filter-function",
        },
        {
          name: "Reduce Function",
          path: "/document/javascript-es6-reduce-function",
        },
        {
          name: "Loop Array",
          path: "/document/javascript-es6-Loop-array",
        },
        {
          name: "Asynchronous",
          path: "/document/javascript-es6-asynchronous",
        },
      ],
    },
    //React
    {
      id: "React",
      subMenu: [
        {
          name: "Get Started",
          path: "/document/react-get-started",
        },
        {
          name: "JSX",
          path: "/document/react-JSX",
        },
        {
          name: "JSX Dynamic Data",
          path: "/document/react-jsx-dynamic-data",
        },
        {
          name: "JSX Style and ClassName",
          path: "/document/react-jsx-style-and-className",
        },
        {
          name: "Component",
          path: "/document/react-component",
        },
        {
          name: "Nested components",
          path: "/document/react-nested-components",
        },
        {
          name: "Props",
          path: "/document/react-props",
        },
        {
          name: "React Hook",
          path: "/document/react-hook",
        },

        {
          name: "useState",
          path: "/document/react-hook-useState",
        },
        {
          name: "useEffect",
          path: "/document/react-hook-useEffect",
        },
        {
          name: "useContext",
          path: "/document/react-hook-useContext",
        },
        {
          name: "useReducer",
          path: "/document/react-hook-useReducer",
        },
        {
          name: "Custom hook ",
          path: "/document/react-custom-hook",
        },
        {
          name: "Context API",
          path: "/document/react-context-API",
        },
        {
          name: "Router DOM V6",
          path: "/document/react-router-DOM-V6",
        },
        {
          name: "Router DOM V5",
          path: "/document/react-router-DOM-V5",
        },
      ],
    },

    //NexJs
    {
      id:'NexJS',
      subMenu:[
        {
          name:'Get Started',
          path: "/document/nextjs-get-started",
        },
        {
          name:'getServerSideProps',
          path: "/document/nextjs-get-Server-Side-Props-ssr",
        },
        {
          name:'getStaticProps',
          path: "/document/nextjs-get-started-ssg",
        },
        {
          name:'getStaticPaths',
          path: "/document/nextjs-get-static-paths-dynamic",
        },
        {
          name:'Client side',
          path: "/document/nextjs-client-side-csr",
        }

      ]
    },
    //Redux
    {
      id: "Redux",
      subMenu: [
        {
          name: "Redux Toolkit",
          path: "/document/redux-toolkit",
        },
      ],
    },
    //scss
    {
      id: "Sass",
      subMenu: [
        {
          name: "Get Started",
          path: "/document/sass-get-started",
        },
        {
          name: "Folder style",
          path: "/document/sass-folder",
        },
        {
          name: "Use",
          path: "/document/sass-use",
        },
        {
          name: "Forward",
          path: "/document/sass-forward",
        },
        {
          name: "Mixin",
          path: "/document/sass-mixin",
        },
      ],
    },
    //API
    {
      id: "API",
      subMenu: [
        {
          name: "Get Started",
          path: "/document/api-get-started",
        },
        {
          name: "Fetch API",
          path: "/document/api-fetch",
        },
        {
          name: "Axios API",
          path: "/document/api-axios",
        },
      ],
    },
    //Function javascript
    {
      id: "Function javascript",
      subMenu: [
        {
          name: "Comma number",
          path: "/document/function-javascript-comma-number",
        },
      ],
    },
    //Windows tool
    {
      id: "Windows tool",
      subMenu: [
        {
          name: "Dev Tool",
          path: "/document/windows-dev-tool",
        },
        {
          name: "Program",
          path: "/document/windows-program",
        },
        {
          name: "Driver",
          path: "/document/windows-driver",
        },
      ],
    },
    //Command-line
    {
      id: "Command Line",
      subMenu: [
        {
          name: "Linux",
          path: "/document/command-linux",
        },
        {
          name: "Policy powershell",
          path: "/document/command-error-policy-powershell",
        },
      ],
    },
  ];

  return menu;
}

////name
//  {
//   id: "",
//   subMenu: [
//     {
//       name: "",
//       path: "/document/",
//     },

//   ],
// },
