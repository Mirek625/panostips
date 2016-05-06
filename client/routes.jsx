import React from 'react';
import {mount} from 'react-mounter';

import {BaseLayout} from './layouts/BaseLayout.jsx';
import TrackingListWrapper from './trackinglist/TrackingListWrapper.jsx';
import InputForm from './inputform/InputForm.jsx';

FlowRouter.route('/', {
  action() {
    mount(BaseLayout, {
      content: (<InputForm />)
    });
  }
});

FlowRouter.route('/results', {
  action() {
    mount(BaseLayout, {
      content: (<TrackingListWrapper />)
    });
  }
});
