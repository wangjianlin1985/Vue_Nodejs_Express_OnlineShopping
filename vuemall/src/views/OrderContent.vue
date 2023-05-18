
<!-- 确认订单页面 -->
<style scoped>
   .bar1 input {
            border: 2px solid #7BA7AB;
            border-radius: 5px;
            color: #9E9C9C;
            position: absolute;
           right: 145px;
           top: 126px;
        }
        .bar1 button {
           position: absolute;
           right: 97px;
           top: 126px;
            background: #7BA7AB;
             width: 52px;
            height: 52px;
            background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUzMTg2NDgyNTExIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMxMzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjIyLjY5NDQgMjIyLjc5NjhBMzIzLjE0ODggMzIzLjE0ODggMCAwIDAgMTMzLjY4MzIgNTEyYzE5LjI1MTItODcuMzcyOCA2NC41MTItMTcyLjc0ODggMTM1LjAxNDQtMjQzLjMwMjRDMzM5LjI1MTIgMTk4LjExODQgNDI0LjYyNzIgMTUyLjg4MzIgNTEyIDEzMy42MzJjLTEwMS42MzItMTkuMTQ4OC0yMTAuNjg4IDEwLjUyMTYtMjg5LjMwNTYgODkuMTY0OHoiIGZpbGw9IiNlNmU2ZTYiIHAtaWQ9IjMxNDAiPjwvcGF0aD48cGF0aCBkPSJNOTg5LjQ0IDgyMi4xMTg0bC0xMjEuNzAyNC0xMjEuNzAyNGExMTguMDE2IDExOC4wMTYgMCAwIDAtOTIuOC0zNC4xMjQ4YzExNC40NTc2LTE2NS41NTUyIDk3LjkyLTM5NC4zOTM2LTQ5LjQ4NDgtNTQxLjgyNC0xNjUuOTM5Mi0xNjUuOTkwNC00MzUuMDQ2NC0xNjUuOTkwNC02MDEuMDM2OCAwLTE2NS45MzkyIDE2NS45OTA0LTE2NS45MzkyIDQzNS4xMjMyIDAgNjAxLjExMzYgMTQ3LjQwNDggMTQ3LjQzMDQgMzc2LjA2NCAxNjMuODQgNTQxLjcyMTYgNDkuMzgyNC0yLjU2IDMzLjI4IDguODU3NiA2Ny41MzI4IDM0LjEyNDggOTIuOGwxMjEuNzAyNCAxMjEuNzI4YzQ2LjA4IDQ1Ljk3NzYgMTIxLjM2OTYgNDUuOTc3NiAxNjcuMzQ3MiAwIDQ2LjIwOC00NS45Nzc2IDQ2LjIwOC0xMjEuMjkyOCAwLjEyOC0xNjcuMzcyOHpNNjc2LjA5NiA2NzYuMDk2Yy0xMzguNjc1MiAxMzguNjc1Mi0zNjMuMzkyIDEzOC42NzUyLTUwMi4wMTYgMC0xMzguNjc1Mi0xMzguNjc1Mi0xMzguNjc1Mi0zNjMuNDQzMiAwLTUwMi4xMTg0IDEzOC42MjQtMTM4LjY3NTIgMzYzLjM0MDgtMTM4LjY3NTIgNTAyLjAxNiAwIDEzOC42NDk2IDEzOC41NzI4IDEzOC42NDk2IDM2My40NDMyIDAgNTAyLjExODR6IiBmaWxsPSIjZTZlNmU2IiBwLWlkPSIzMTQxIj48L3BhdGg+PC9zdmc+');
            border-radius: 0 5px 5px 0;
            background-size: 30px 30px;
            background-repeat: no-repeat;
            background-position: center;
        }
        ul li{list-style: none;}
			.track-rcol{width: 900px;}
			.track-list{margin: 20px; padding-left: 5px; position: relative;}
			.track-list li{position: relative; padding: 9px 0 0 25px; line-height: 18px; border-left: 1px solid #d9d9d9; color: #999;}
			.track-list li.first{color: red; padding-top: 0; border-left-color: #fff;}
			.track-list li .node-icon{position: absolute; left: -6px; top: 50%; width: 11px; height: 11px; background: url(../assets/order-icons.png)  -21px -72px no-repeat;}
			.track-list li.first .node-icon{background-position:0 -72px;}
			.track-list li .time{margin-right: 20px; position: relative; top: 4px; display: inline-block; vertical-align: middle;}
			.track-list li .txt{max-width: 600px; position: relative; top: 4px; display: inline-block; vertical-align: middle;}
			.track-list li.first .time{margin-right: 20px; }
			.track-list li.first .txt{max-width: 600px; }
</style>


<template>
  <div>
    <nav-header></nav-header>

    <nav-bread>
      <span>我的订单</span>
    </nav-bread>

    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 39 32">
          <title>ok</title>
          <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
        </symbol>
        <symbol id="icon-delete" viewBox="0 0 26 32">
          <title>delete</title>
          <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
        </symbol>
      </defs>
    </svg>

    <div class="container">
      <div class="checkout-order">
        <!-- order list -->
        <div class="page-title-normal checkout-title">
          <h2><span>我的订单</span></h2>
        </div>
        <div class="search bar1">
        <form>
            <input type="text" placeholder="请输入您的订单编号..." v-model="userOrderId">
            <button @click.prevent="searchOrder" ></button>
        </form>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>订单编号</li>
                <li>订单总价</li>
                <li>付款方式</li>
                <li>订单状态</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="(item,index) in orderList" :key="item.orderId">
                <div class="cart-tab-1">
                  
                  <div class="cart-item-title">
                    <div class="item-name">{{item.orderId}}
                      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUzMTczMzA1ODMxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDExMDYgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE2LjAxNTYyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4OS4yNDkwMTYgMzMzLjA0OTUzN2ExOS41NjExNjUgMTkuNTYxMTY1IDAgMCAwIDEwLjA5NjA4NSAyLjc3NjQyNCAxOS43NTA0NjcgMTkuNzUwNDY3IDAgMCAwIDE3LjAzNzE0NC05LjY1NDM4MiAzMTQuMzY2ODU4IDMxNC4zNjY4NTggMCAwIDEgMjY4Ljg3MTM3My0xNTMuMjcxMTk2IDE5Ljc1MDQ2NyAxOS43NTA0NjcgMCAwIDAgMC0zOS41MDA5MzMgMzU0LjA1NzA5MyAzNTQuMDU3MDkzIDAgMCAwLTMwMi44ODI1NiAxNzIuNTc5OTU5IDE5Ljc1MDQ2NyAxOS43NTA0NjcgMCAwIDAgNi44Nzc5NTggMjcuMDcwMTI4eiBtLTIzLjA5NDc5NiA1Ny4zNTgzODVhMTkuNzUwNDY3IDE5Ljc1MDQ2NyAwIDAgMC0yMy43MjU4IDE0LjcwMjQyNSAyNTkuNTk1NTk1IDI1OS41OTU1OTUgMCAwIDAtOS4yNzU3NzkgNjguOTA1NzgyIDE5Ljc1MDQ2NyAxOS43NTA0NjcgMCAwIDAgMzkuNTAwOTM0IDAgMjIyLjM2NjI4IDIyMi4zNjYyOCAwIDAgMSA4LjIwMzA3LTU5Ljg4MjQwNiAxOS43NTA0NjcgMTkuNzUwNDY3IDAgMCAwLTE0LjcwMjQyNS0yMy43MjU4MDF6IiBwLWlkPSI0MzgyIiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PHBhdGggZD0iTTEwOTEuMDE4NzM5IDk1NS43MjU2MDFsLTIwMS4xMDE0LTIwMS4xMDE0LTEuNjQwNjE0LTEuNTc3NTEzYTQ4NC42NzUxOTcgNDg0LjY3NTE5NyAwIDEgMC0xMzkuNjQxNDggMTM4LjEyNzA2OGwtNTcuNTQ3Njg3LTU3LjU0NzY4N2E0MDYuODcyMjQgNDA2Ljg3MjI0IDAgMSAxIDkyLjM3OTE4MS03NS4xNTI3MzVsNDUuMTE2ODgyIDQ1LjExNjg4MWEzOS42MjcxMzUgMzkuNjI3MTM1IDAgMCAwIDUuNDg5NzQ2IDYuODc3OTU4bDIwMS4xMDE0IDIwMS4yMjc2MDJhMzkuNTAwOTM0IDM5LjUwMDkzNCAwIDEgMCA1NS44NDM5NzItNTUuODQzOTczeiIgcC1pZD0iNDM4MyIgZmlsbD0iIzEyOTZkYiI+PC9wYXRoPjwvc3ZnPg==" style="width:20px;height:20px;position:absolute;left:200px;top:60px;cursor:pointer;" class="img" v-on:click="showDetail(index)"/>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{item.orderTotal|currency('￥')}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                        <span  style="color:orange;position:absolute;left:70px;top:65px;">在线支付</span>          
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total" v-if="item.orderStatus == '1'">已付款，待发货</div>
                  <div class="item-price-total" v-if="item.orderStatus == '2'">已发货
                      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUzNzUwOTUwMzQ5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2MjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjguNjEgNTIxLjA2OWwwIDIwNy43MDRjMCAxNC42MTUgMTEuODk1IDI2LjQ5IDI2LjQ5NSAyNi40OWw1NC4yMjUgMGMwLjAzIDY2Ljg3NSA1NC4yIDEyMS4wNjUgMTIxLjA5IDEyMS4wNjUgNjYuODYgMCAxMjEuMDgtNTQuMTkgMTIxLjA4LTEyMS4wNjVsMC4wMiAwIDU0LjIwNSAwYzE0LjY1IDAgMjYuNDk1LTExLjg3NSAyNi40OTUtMjYuNDU1TDQzMi4yMiAyOTcuNDIyYzAtMTQuNjMyLTExLjg0NS0yNi40OTItMjYuNDQ1LTI2LjQ5MmwtMC4wNSAwLTk0LjYwNSAwLTEwNi45MSAwYy04LjgyIDAtMTcuMTEgNC40MjctMjIuMDMgMTEuNzI3TDMzLjA3IDUwNi4zOTljLTIuNzU1IDQuMTEyLTQuMjYgOC45Ny00LjQxIDEzLjkxQzI4LjY0NSA1MjAuNTU0IDI4LjU5NSA1MjAuODE5IDI4LjYxIDUyMS4wNjl6TTMxMS4xMDQgNTEzLjA4OUwxMDEuMzMgNTEzLjA4OWwxMDcuNjU1LTE2MS40NjIgMTAyLjEyIDAgMCAxNjEuNDQ1TDMxMS4xMDUgNTEzLjA4OXpNMTY5Ljg3NSA3NTUuMjQ4YzAtMzMuMzYgMjcuMTctNjAuNTUgNjAuNTM1LTYwLjU1IDMzLjM2IDAgNjAuNTQ1IDI3LjE3IDYwLjU0NSA2MC41NSAwIDMzLjM4LTI3LjE3IDYwLjUzLTYwLjU0NSA2MC41M0MxOTcuMDI5IDgxNS43NzggMTY5Ljg3NSA3ODguNjI4IDE2OS44NzUgNzU1LjI0OHpNNDcyLjU3OSAyMjUuMzQ0bDAgNDk0Ljc0NGMwIDE5LjQgMTUuNzI1IDM1LjE2IDM1LjE1IDM1LjE2bDEyNi4yOCAwYzAgNjYuODcgNTQuMjA1IDEyMS4wNiAxMjEuMDggMTIxLjA2czEyMS4wOC01NC4xOSAxMjEuMDgtMTIxLjA2bDg1LjkzNSAwYzE5LjQwNSAwIDM1LjEzLTE1Ljc2IDM1LjEzLTM1LjE2TDk5Ny4yMzQgMjI1LjM0NGMwLTE5LjQwNS0xNS43MjUtMzUuMTQ1LTM1LjE1LTM1LjE0NUw1MDcuNzI5IDE5MC4xOTlDNDg4LjI4OSAxOTAuMTk5IDQ3Mi41NzkgMjA1LjkzOSA0NzIuNTc5IDIyNS4zNDR6TTY5NC41MzggNzU1LjI0OGMwLTMzLjM2IDI3LjE4NS02MC41NSA2MC41NS02MC41NSAzMy4zNiAwIDYwLjUzIDI3LjE3IDYwLjUzIDYwLjU1IDAgMzMuMzgtMjcuMTUgNjAuNTMtNjAuNTMgNjAuNTNDNzIxLjcwOCA4MTUuNzc4IDY5NC41MzggNzg4LjYyOCA2OTQuNTM4IDc1NS4yNDh6IiBmaWxsPSIjMTI5NmRiIiBwLWlkPSIzNjI3Ij48L3BhdGg+PC9zdmc+" style="width:27px;height:27px;position:absolute;left:130px;top:60px;cursor:pointer;" @click="show()" />
                  </div>
                  <div class="item-price-total" v-if="item.orderStatus == '3'">已签收，<a href="javascript:;"  style="color:orange;text-decoration:underline;" @click="toEva(index)">前往评价</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
          <!-- 模态框 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':DetailModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">订单详情</div>
              <button class="md-close" @click="DetailModalFlag=false">Close</button>
            </div>
            <div style="font-size:16px;">订单编号:</div><span style="color:#1296db;">{{orderid}}</span>
            <div style="font-size:16px;">下单时间:</div><span style="color:#1296db;">{{date}}</span>
            <div style="font-size:16px;">收货信息:</div><span style="margin-left:20px;">收货人姓名:<p style="color:#d81e06;margin-left:30px;">{{username}}</p></span><br/><span style="margin-left:20px;">收货人地址:<p style="color:#d81e06;margin-left:30px;">{{streetname}}</p></span><br/><span style="margin-left:20px;">收货人联系方式:<p style="color:#d81e06;margin-left:30px;">{{telphone}}</p></span>
            <div style="font-size:16px;">实付金额:</div><span style="color:orange;">{{ordertotal | currency('￥')}}元</span>
          </div>
        </div>

         <!-- 模态框 -->
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':parcelModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">物流详情</div>
              <button class="md-close" @click="parcelModalFlag=false">Close</button>
            </div>
           <div class="track-rcol">
			<div class="track-list">
				<ul>
					<li class="first">
						<i class="node-icon"></i>
						<span class="time">2016-03-06 02:07:15</span>
						<span class="txt">商家正通知快递揽件～</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2017-03-06 10:32:15</span>
						<span class="txt">您的商品已经出库，开始进入分发中心～</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2017-03-07 07:07:15</span>
						<span class="txt">您的商品已经在运输的路上～</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2017-03-08 12:02:15</span>
						<span class="txt">您的商品已到达分拣点～</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2017-03-09 13:04:15</span>
						<span class="txt">您的商品正在派送中，配送员电话:12345678999</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2017-03-10 18:07:15</span>
						<span class="txt">感谢您在涛涛网站购物，欢迎您再次光临！</span>
					</li>
				</ul>
			</div>
	     	</div>
          </div>
        </div>

        <!-- Price count -->
        <!-- <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>商品价格:</span>
                <span>{{subTotal|currency('￥')}}</span>
              </li>
              <li>
                <span>配送费:</span>
                <span>{{shipping|currency('￥')}}</span>
              </li>
              <li>
                <span>折后:</span>
                <span>{{discount|currency('￥')}}</span>
              </li>
              <li>
                <span>税后:</span>
                <span>{{tax|currency('￥')}}</span>
              </li>
              <li class="order-total-price">
                <span>总价:</span>
                <span>{{orderTotal|currency('￥')}}</span>
              </li>
            </ul>
          </div>
        </div> -->

        <div class="order-foot-wrap">
          <!-- <div class="prev-btn-wrap">
            <router-link class="btn btn--m" to="/address">上一步</router-link>
          </div>
          <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="">前往付款</button>
          </div> -->
        </div>
      </div>
    </div>
    <nav-footer style="margin-top:420px;"></nav-footer>
  </div>
</template>

<script>
  import NavHeader from './../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import NavBread from './../components/NavBread'
  import {currency} from './../util/currency'
  import axios from 'axios'

  export default{
      data(){
          return{
              orderTotal:0,
              orderList:[],
              DetailModalFlag:false,
              checkIndex:0,
              orderid:0,
              date:'',
              ordertotal:0,
              username:'',
              streetname:'',
              telphone:'',
              userOrderId:'',
              parcelModalFlag:false,
              orderId:0
          }
      },
      mounted(){
          this.init();
      },
      components:{
        NavHeader,
        NavFooter,
        NavBread
      },
      filters:{
        currency:currency
      },
      methods:{
        // 拿到购物车中选中的数据
        init(){
          axios.post("/users/getOrderList").then((response)=>{
             console.log(response);
             this.orderList = response.data.result;
          });
        },
        showDetail(index){
            this.DetailModalFlag=true;
            this.checkIndex = index;
               this.orderid = this.orderList[this.checkIndex].orderId;
               this.date = this.orderList[this.checkIndex].createDate;
               this.ordertotal = this.orderList[this.checkIndex].orderTotal;
               this.username = this.orderList[this.checkIndex].addressInfo.userName;
               this.streetname = this.orderList[this.checkIndex].addressInfo.streetName;
               this.telphone = this.orderList[this.checkIndex].addressInfo.tel;
        },
        toEva(index){
           this.checkIndex = index;
           console.log(this.checkIndex);
           this.orderId = this.orderList[this.checkIndex].orderId;
           console.log(this.orderId);
           this.$router.push({name: 'EvaluationCen', params: {orderId: this.orderList[this.checkIndex].orderId}})
        },
        show(){
            this.parcelModalFlag = true;
        },
        searchOrder(){
            var userOrderId = this.userOrderId;
            console.log(userOrderId);
            if(!userOrderId){
              return;
            }
            axios.get("/users/searchByorderId",{
                params:{
                  orderId:userOrderId
                }
            }).then((response)=>{
                let res = response.data;
                console.log(res);
                this.orderList = res.orderList;
            });
        }
      }
  }
</script>
