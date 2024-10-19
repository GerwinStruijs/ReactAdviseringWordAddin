/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 */

/// <reference types="office-js" />
/* global Excel */ //Required for these to be found.  see: https://github.com/OfficeDev/office-js-docs-pr/issues/691

import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react';
import Header from './Header';
import HeroList, { HeroListItem } from './HeroList';
import Progress from './Progress';

const logo = require('../assets/logo-filled.png');

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  listItems: HeroListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: 'Ribbon',
          primaryText: 'Achieve more with Office integration',
        },
        {
          icon: 'Unlock',
          primaryText: 'Unlock features and functionality',
        },
        {
          icon: 'Design',
          primaryText: 'Create and visualize like a pro',
        },
      ],
    });
  }

  click = async () => {
    try {
      await Word.run(async (context) => {
        /**
         * Insert your Word code here
         */
          const sentence: Word.Range = context.document.body.insertText("hallo This is some formatted text!", "Replace");
          sentence.font.set({
              name: "Courier New",
              bold: true,
              size: 18
          });

        await context.sync();
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={logo}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo={logo} title={this.props.title} message="Welcome TypeScript" />
        <HeroList
          message="Discover what Office .NET 8 Add-ins can do for you today!"
          items={this.state.listItems}
        >
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            iconProps={{ iconName: 'ChevronRight' }}
            onClick={this.click}
          >
            Run
          </Button>
        </HeroList>
      </div>
    );
  }
}
