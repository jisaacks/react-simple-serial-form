# React Simple Serial Form

A very simple form wrapper that auto serializes when submitted.

For more features check out: [React Serial Forms](https://github.com/LevInteractive/react-serial-forms)

## Install

```shell
npm install react-simple-serial-form --save
```

## Usage

```javascript
import React, { Component } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class SearchForm extends Component {

  dataHandler(data) {
    console.log("Search:", data);
  }

  render() {
    return (
      <SimpleSerialForm className="search-form" onData={this.dataHandler}>
        <input type="text" name="q"/>
        <button>Search</button>
      </SimpleSerialForm>
    );
  }

};
```
