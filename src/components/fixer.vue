<template>
	<div>
		 <slot :fixer="fixerData"></slot>
	</div>
</template>

<script>
const baseUrl = '//data.fixer.io/api';

function data() {
	return {
		fixerData: {
			success: false,
		},
	};
}

function created() {
	if (this.fetching) {
		fetch(this.fixerUrl)
			.then(r => r.json())
			.then(fixerData => {
				this.fixerData = fixerData;
				this.$emit('input', fixerData);
			})
			.catch(err => this.$emit('error', err));
	}
}

function fixerUrl() {
	const url = `${baseUrl}/${this.feature}?access_key=${this.apiKey}${
		this.params
	}`;
	return url;
}

function fetching() {
	if (this.fetching) {
		fetch(this.fixerUrl)
			.then(r => r.json())
			.then(fixerData => this.$emit('input', fixerData))
			.catch(err => this.$emit('error', err));
	}
}

export default {
	name: 'fixer',
	created,
	computed: {
		fixerUrl,
	},
	data,
	props: {
		apiKey: {
			type: String,
			required: true,
		},
		feature: {
			type: String,
			default: 'latest',
		},
		params: {
			type: String,
			default: '&base=EUR&symbols=USD,PEN',
		},
		fetching: {
			type: Boolean,
			default: true,
		},
	},
	watch: {
		apiKey: fetching,
		feature: fetching,
		fetching,
		params: fetching,
	},
};
</script>
