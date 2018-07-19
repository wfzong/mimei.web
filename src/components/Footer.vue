<template>
<footer class="footer">
	<div class="wapper">
		<a href="/" class="logo"><img src="../images/elements/logo.png"></a>
		<ul>
			<li><router-link :to="{path:'/privacy'}">隐私策略</router-link></li>
			<li><router-link :to="{path:'/copyright'}">使用条款</router-link></li>
			<li><router-link :to="{path:'/contact'}">联系我们</router-link></li>
			<li>&copy; 流水清清 2017</li>
		</ul>
	</div>
</footer>
</template>
<script>

</script>
<style lang="scss">
@import "../scss/common/variable";
@import "../scss/common/mixin";

.footer {
    clear: both;
    overflow: hidden;
    background: #222;
    color: white;
    position: relative;
    z-index: 0;

    .wapper {
        max-width: $NAVIGATION_BREAKPOINT_MAX;
        margin: 0 auto;
        position: relative;

        .logo {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            display: block;
            height: $MAIN_NAVIGATION_HEIGHT;
            line-height: $MAIN_NAVIGATION_HEIGHT;
            padding-left: $PADDING_SMALL;

            img {
                width: 50px;
                height:auto;
                vertical-align: middle;
            }
            @include max-screen($NAVIGATION_BREAKPOINT_MEDIUM){
                top: auto;
                left: auto;
                right: 8px;
                bottom: 0;
            }
        }

        
        ul {
            height:60px;
            text-align: right;
            padding-right: 12px;
            li {
                position: relative;
                line-height: 60px;
                padding: 0 12px;
                a {
                    color: white;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                
                display: inline-block;
                @include font-size(14px);
                &+:before {
                    display: block;
                    position: absolute;
                    top: 24px;
                    left: 0px;
                    content: "";
                    width: 1px;
                    height: 12px;
                    background-color: rgba(255,255,255,0.4);
                }
            }
            @include max-screen($NAVIGATION_BREAKPOINT_MEDIUM){
                height: auto;
                text-align: left;
                padding: 0;
                li {
                    display: block;
                    &:before {
                        width: 100%;
                        height: 1px;
                        top: 0;
                        background: #333;
                        position: relative;
                    }
                }
                li:last-child {
                    background:#111;
                    &:before {
                        display: none;
                    }
                }
                
            }
        }
    }
}

</style>