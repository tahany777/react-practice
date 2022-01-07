# React Practice

## use State

* Returns a stateful value, and a function to update it.

### to use Icons in react

``npm i react-icons -D``
or
``npm i react-icons --save``

### we need to move react icons to be production dependency

```javascript

npm i react-icons --save-prod

```

## Use Effect

> async

* Only When Load

```javascript

useEffect(() => {
    console.log('load time')
}, [])
//only runs at load time
```

* For Every Render

```javascript

useEffect(() => {
    console.log('render')
})
//for every render
```

* Depends On Dependency Changes

```javascript

useEffect(() => {
    console.log('updating items state')
},[items])
//looking to this function when the dependency change(items) 
```

### JSON-SERVER

* **``npx json-server -p 3500 -w data/db.json``**

* p => stands for port
* w => stands for watch
* ``http://localhost:3500/items``
