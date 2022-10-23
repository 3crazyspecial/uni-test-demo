<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- 支付宝原生组件 -->
		<demo onHello="handleHello" @xxx="xx"></demo>
		<view v-if="callbackSuccess">回调成功</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				callbackSuccess: false
			}
		},
		onLoad() {
			this.$scope.handleHello = this.handleHello.bind(this);
		},
		methods: {
			handleHello(){
				console.log('outer hello');
				this.callbackSuccess = true;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
