import React from 'react';
import './App.css';
import { FluentProvider,Button, teamsLightTheme } from '@fluentui/react-components';
import {spfi,SPFx} from '@pnp/sp';
import "@pnp/sp/webs";

interface IAppProps{
  wpContext:any
}

interface IAppState {
  webTitle:string;
}
export default class App extends React.Component<IAppProps,IAppState> {
  private sp:any;
  constructor(props:any){
    super(props);
    this.sp=spfi().using(SPFx(this.props.wpContext));
    this.state={webTitle:""};
  }

  public componentDidMount(){
    
      this.sp.web.select("Title")().then((w: any)  => {
        console.log(w);
        this.setState({webTitle:w.Title});
    });
  }

  public render():React.ReactElement<any>{
    return (
      <div>
        <FluentProvider theme={teamsLightTheme}>
          <Button appearance="primary" onClick={()=>{alert("Hola mundo " + this.state.webTitle)}}>Haz Click</Button>
        </FluentProvider>
      </div>
    );
  }

  
}


