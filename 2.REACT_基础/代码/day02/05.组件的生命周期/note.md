### 组件的生命周期
    
    初始化流程：    ReactDOM.render(<Life/>,container);
          
          static defaultProps = {  //设置默认值
          }
          
          static propTypes = {  //设置规则
          }
          
          componentWillMount(){}  组件将要挂载
          
          render(){}   第一次执行render
          
          componentDidMount(){}  //组件挂载完成挂载，一般在这里我们做一些异步操作比如说定义定时器或者发送Ajax请求
          
          
          更新流程：setState({});
          componentWillUpdate(){}  组件将要更新
          
          redner(){}  render再次执行
          
          componentDidUpdate(){}  组件更新完成
          
          
          卸载流程
               卸载：ReactDOM.unmountComponentAtNode(container);
           在卸载之前会调用componentWillUnmount(){}   比如说清除定时器
          
          
          
          
          
            
            