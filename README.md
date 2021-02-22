### day01
  1.熟悉项目功能
  2.搭建开发环境(脚手架，antd,自定义主题，按需引入antd样式)
  3.搭建路由

  github清除默认样式的库 reset.css  minireset.css



  ###  登录流程
  登录页面/login点击登录后，获取用户信息，存入redux，后面的页面都需要验证登录成功，拿到token和用户信息才能进入后面的页面，这中间就用一个高阶组件，check_login函数来验证用户是否登录，验证成功后才能进入admin路由，后面所有的页面路由都写在admin这个页面，在admin页面需要使用用户信息。
  用户一刷新，redux里的数据会没有，这时候也就是redux存数据的时候要多存一道session,
  在login页面的时候，去获取session里的信息，有的话拿token直接去请求后端，成功的话就直接登录系统。
  没有的话，在登录页面停留等登录。
  
  在admin页面刷新的话，也是去session里拿信息（这一层逻辑可以做在check_login里），有的话直接存到redux里，admin这层里的路由都是可以直接在redux里拿信息的
  // 上面这个可以做在state里，
  因为刷新页面，state会首先初始化，可以直接写在login_ruducer里，也就是在login页面刷新也是可以判断，那么在login页面也是直接拿state的数据做判断

  是否登录这个逻辑就是直接做在state上，在login和admin中间在一层是否登录的判断，check_login进行跳转