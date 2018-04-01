<template>
  <section class="fixer">
		<fixer :api-key="model.key" @input="showData"
			:params="model.params" :fetching="model.fetching"
			:feature="model.feature" />
		<header class="header">
			<h1 class="title">Vue <a href="https://fixer.io" target="_blank" rel="noopener">Fixer </a>
			</h1>
		</header>
		<section class="currencies">
			<form class="form">
				<div class="input-container">
					<label class="label" for="key">Fixer Api Key</label>
					<span><a v-show="!model.key" href="https://fixer.io/signup/free">Get a free api key</a></span>
					<input class="input" type="text" id="key" v-model="model.key" />
				</div>
				<div class="input-container">
					<label class="label" for="features">Feature</label>
					<select name="features" id="features" v-model="model.feature">
						<option value="latest">latest</option>
					</select>
				</div>
				<div class="input-container">
					<label class="label" for="params">Params</label>
					<input class="input" type="text" id="params" v-model="model.params" />
				</div>
				<div class="input-container">
					<label class="label" for="fetching">Fetch on changes</label>
					<input class="input" type="checkbox" id="fetching" v-model="model.fetching" />
				</div>
			</form>
			<div class="separator"></div>
			<div class="result" v-show="fixerData.success">
				<header>
					<h2>Today 1 {{ fixerData.base }} worth:</h2>
				</header>
				<section>
					<ul v-for="(rate, label) in fixerData.rates" :key="rate">
						<li>In {{label}} = {{ rate }}</li>
					</ul>
				</section>
			</div>
		</section>
	</section>
</template>

<script>
import fixer from './components/fixer.vue';

function data() {
	return {
		fixerData: {
			success: false,
		},
		model: {
			feature: 'latest',
			fetching: true,
			key: process.env.VUE_APP_FIXER_KEY,
			params: '&base=EUR&symbols=USD,PEN',
		},
	};
}

function showData(data) {
	this.fixerData = data;
}

export default {
	name: 'app',
	components: {
		fixer,
	},
	data,
	methods: {
		showData,
	},
};
</script>

<style lang="scss" scoped>
* {
	font-family: Roboto;
}

.currencies {
	display: grid;
	grid-template-columns: 0.5fr minmax(max-content, max-content) auto;
	grid-gap: 0.5em;
}

@media (max-width: 667px) {
	.currencies {
		grid-template-columns: 1fr;
	}
}

.input-container {
	padding: 0.5em 0;

	.input {
		padding: 0.5em;
		width: 100%;
	}

	.label {
		display: block;
		font-weight: 700;
		padding: 0.5em 0;
	}
}

.result {
	padding: 0.5em;
}

.separator {
	background-color: #69686885;
	margin-left: 20px;
	width: 2px;
}

.title {
	text-align: center;
}
</style>
