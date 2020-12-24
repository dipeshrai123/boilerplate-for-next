# Boilerplate for next

> Official boilerplate for next app with next-auth-navigaton & react-uicomp

## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
```

### Redux Integration

For redux integration replace **\_app.js** file with code below :

```bash
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

import "../sass/main.scss";

const store = createStore(reducers, applyMiddleware(thunk));

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
```

**package.json** file doesn't have **redux, react-redux, redux-thunk** by default. You should install it if you want above code to work.

```bash
# Install redux
npm i redux

# Install react-redux
npm i react-redux

# Install redux-thunk
npm i redux-thunk
```

### Useful packages

Here are some useful packages that you want to use :

**react-icons** - has all icons that we need

```bash
npm i react-icons
```

**react-hook-form** - for form validation

```bash
npm i react-hook-form
```

### API Calls

To do API Calls, we need to create an **api** function from **apiGenerator** function available in _src/helpers/Helpers.js_.

```js
// Api.config.js

import { apiGenerator } from "../helpers/Helpers";

const token = getCookie("token"); // GET TOKEN FROM COOKIE
export const BASE_URL = "http://192.168.1.1:8000"; // BASE URL

export const api = apiGenerator({ token, baseURL: BASE_URL }); // API FUNCTION
```

Now you can use this **api** function in any actions or anywhere you want to do api calls. The API Reference for **api** function is :

```js
api(url, method, body, config);
```

- url - _end-point URL_
- method ( optional ) Default: **GET**
- body ( optional )
- config ( optional ) - _config object with following properties_
  - file ( optional ) - **true** to upload file, otherwise **false**
  - fileUploadProgress (optional) - function which is called with one parameter i.e. **percentage** while uploading
  - fileDownloadProgress (optional) - function which is called with one parameter i.e. **percentage** while downloading

**Example**

```js
// Sample.action.js
import { api } from "../config/Config";
...

dispatch({ type: SAMPLE.LOADING });

res = await api(`${APIS.sample}`, "POST", formData, {
    file: true,
    fileUploadProgress: function(percentage) {
        dispatch({ type: SAMPLE.PROGRESS, payload: percentage });
    }
});

const { success } = res.data; // res.data is now required

if(success) dispatch({ type: SAMPLE.SUCCESS });

...
```

### Custom Form Validation

For custom form validation, we need to import **validator()** and **isValid()** functions from _src/utils/Utils.js_.

```javascript
import { validator, isValid } from "../utils/Validator.util";
```

Now this **validator()** function on passing empty object returns a **validate()** function which is used to validate a input form.

Lets say we want to validate the form on submit:

```javascript
import { validator, isValid } from "../utils/Validator.util";
...
const onSubmit = () => {
    const catchedErrors = {};
    const validate = validator(catchedErrors);

    // ...
}
...
```

Now **validate()** function takes three parameters, first one is key whose value will be **true** of an **object** passed to **validator()** function when second argument condition is **true**. where last parameter is an optional callback function which is called when second condition is **true**.

```javascript
import { validator, isValid } from "../utils/Validator.util";
...
const onSubmit = () => {
    const catchedErrors = {};
    const validate = validator(catchedErrors);

    // VALIDATION
    validate("firstname", image?.length === 0, () => {
    	//.. called when condition is true.
    });

    if (!isValid(catchedErrors)) {
        console.error(catchedErros);
        return;
    }
}
...
```

For official documentation for **react-uicomp** visit : https://react-uicomp.js.org/
