# Vue-Fixer

> The simple but powerful vue component for the fixer API

![vue fixer demo](https://s3.amazonaws.com/vuecomp/vue-fixer-demo.png)

### Features support

* [x] Latest rates endpoint
* [ ] Convert endpoint
* [ ] Historical rates endpoint
* [ ] Time-Series data endpoint
* [ ] Fluctuation data endpoint

### Getting Started

First at all make sure you have a fixer API KEY. If you don't, please grab one [from here](https://fixer.io).

### Installing

```bash
npm i vue-fixer -S
```

Or using unpkg

```html
<script src="https://unpkg.com/vue-fixer/dist/vueFixer.umd.min.js"></script>
```

### Include the component

```javascript
import vueFixer from 'vue-fixer';

export default {
	name: 'my-component',
	components: {
		vueFixer,
		// vueFixer: window.vueFixer, if you are using the UMD version
	},
};
```

And now in your template

```html
<vue-fixer api-key="my_fixer_secret_key" />
```

### Events

The vue-fixer component emit an **input** event giving you all the data you want.

```html
<vue-fixer api-key="my_fixer_secret_key" @input="myMethod" />
<pre>
	{{fixerData}}
</pre>
```

```javascript
import vueFixer from 'vue-fixer';

function data() {
	return {
		fixerData: {},
	};
}

function myMethod(fixerData) {
	this.fixerData = fixerData;
}

export default {
	name: 'my-component',
	components: {
		vueFixer,
	},
	data,
	methods: {
		myMethod,
	},
};
```

### Props

| Prop     | Default                   | Type    | Description                                                        |
| -------- | ------------------------- | ------- | ------------------------------------------------------------------ |
| api-key  | none                      | String  | The fixer api key                                                  |
| feature  | latest                    | String  | the fixer feature you want to fetch                                |
| params   | &base=EUR&symbols=USD,PEN | String  | query parameters                                                   |
| protocol | http                      | String  | The http protocol you want to use                                  |
| fetching | true                      | Boolean | Flag who determine if the request to fixer must be done right away |

### Events

| Name  | Default | Value  | Description                   |
| ----- | ------- | ------ | ----------------------------- |
| input | none    | Object | The fixer http response       |
| error | none    | Object | the fixer http response error |

### Slots

Instead using events you can use slots and get the same result

```html
<fixer :api-key="model.key">
  <div slot-scope="props">
    <div v-show="props.fixer.success">
      <header>
        <h2>Today 1 {{ props.fixer.base }} worth</h2>
      </header>
      <section>
        <ul v-for="(rate, label) in props.fixer.rates" :key="rate">
          <li>In {{label}} = {{ rate }}</li>
        </ul>
      </section>
    </div>
  </div>
</fixer>
```
