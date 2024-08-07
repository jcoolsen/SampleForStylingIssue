import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';

import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { Drawer, Dialog,DialogSurface, DialogBody, DialogContent } from '@fluentui/react-components';

export interface IHelloWorldState {
  drawerIsOpen: boolean;
  dialogIsOpen: boolean;
}

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  public constructor(props: IHelloWorldProps) {
    super(props);

    this.state={
      drawerIsOpen: false,
      dialogIsOpen: false
    };
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description,
      isDarkTheme
    } = this.props;

    const setDrawerIsOpen=(open: boolean):void => {
      this.setState({ drawerIsOpen: open });
    }

    const setDialogIsOpen=(open: boolean):void => {
      this.setState({ dialogIsOpen: open });
    }

    console.debug(isDarkTheme);

    return (
      <FluentProvider theme={isDarkTheme?webDarkTheme:webLightTheme}>

        <div>
        
          <button onClick={() => setDrawerIsOpen(true)}>Open Drawer</button>
          <Drawer
            open={this.state.drawerIsOpen}
            type={"overlay"}
            onOpenChange={(_, { open }:{ open: boolean} ) => setDrawerIsOpen(open)}
          >
            <div>Drawer Content: {description}</div>
          </Drawer>

          <button onClick={() => setDialogIsOpen(true)}>Open Dialog</button>
          <Dialog open={this.state.dialogIsOpen} 
            onOpenChange={(_, { open }:{ open: boolean} ) => setDialogIsOpen(open)} >
            <DialogSurface>
              <DialogBody>
                <DialogContent>

                  <div>Dialog Content: {description}</div>

                </DialogContent>
              </DialogBody>
            </DialogSurface>
          </Dialog>

        </div>

      </FluentProvider>
    );
  }
}
