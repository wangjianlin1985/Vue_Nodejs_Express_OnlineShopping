import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import PayConfirm from '@/views/PayConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import OrderContent from '@/views/OrderContent'
import ProductInfo from '@/views/ProductInfo'
import EvaluationCen from '@/views/EvaluationCen'
import UserLogin from '@/views/UserLogin'
import AdminLogin from '@/views/AdminLogin'
import AdminCon from '@/views/AdminCon'
import Product from '@/components/Product'
import User from '@/components/User'
import Order from '@/components/Order'
import UserAddress from '@/components/UserAddress'
import UserAddressList from '@/components/UserAddressList'
import ProductEva from '@/components/ProductEva'
import OrderList from '@/components/OrderList'
import EvaList from '@/components/ProductEvaList'
import Edit from '@/components/Edit'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component:GoodsList
    },
    {
      path: '/userLogin',
      name: 'UserLogin',
      component:UserLogin 
    },
    {
      path: '/adminLogin',
      name: 'AdminLogin',
      component:AdminLogin 
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/productInfo/:productId',
      name: 'ProductInfo',
      component: ProductInfo
    },
    {
      path: '/address',
      name: 'Address',
      component:Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component:OrderConfirm
    },
    {
      path: '/payConfirm',
      name: 'PayConfirm',
      component:PayConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component:OrderSuccess
    },
    {
      path: '/orderContent',
      name: 'OrderContent',
      component:OrderContent
    },
    {
      path: '/evaluationCen/:orderId',
      name: 'EvaluationCen',
      component:EvaluationCen
    },
    {
      path: '/adminCon',
      name: 'AdminCon',
      component:AdminCon,
      meta: {
        requireAuth: true,  
     },
     children:[
      {
        path: '/product',
        name: 'Product',
        component:Product,
        meta: {
          requireAuth: true,  
       }
      },
      {
        path: '/order',
        name: 'Order',
        component:Order,
        meta: {
          requireAuth: true,  
       }
      },
      {
        path: '/userAddress',
        name: 'UserAddress',
        component:UserAddress,
        meta: {
          requireAuth: true,  
       }
      },
      {
        path: '/productEva',
        name: 'ProductEva',
        component:ProductEva,
        meta: {
          requireAuth: true,  
       }
      },
      {
        path: '/user',
        name: 'User',
        component:User,
        meta: {
          requireAuth: true,  
       }
      },
      {
        path: '/orderList/:userName',
        name: 'OrderList',
        component:OrderList,
        meta: {
          requireAuth: true,  
       }
        },
        {
          path: '/evaList/:productId',
          name: 'EvaList',
          component:EvaList,
          meta: {
            requireAuth: true,  
         }
        },
        {
          path: '/userAddressList/:userName',
          name: 'UserAddressList',
          component:UserAddressList,
          meta: {
            requireAuth: true,  
         }
        },
      {
        path: '/edit',
        name: 'Edit',
        component:Edit,
        meta: {
          requireAuth: true,  
       }
      },
      ]
    }
  ]
})
