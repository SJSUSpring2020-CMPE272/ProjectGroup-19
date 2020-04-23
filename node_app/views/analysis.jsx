import React from 'react';
import dashboardSpec from '../src/data/dashboard.json';

const response = await
this.http.post('/api/dde/session',
               options).toPromise();

const data = response.json();
this.session.code = data.sessionCode;
this.session.id = data.sessionId;
this.session.keys = data.keys.map(
    k => new SessionKey(k));

class Analysis extends Component {
    window.api = new CognosApi({
        cognosRootURL: 'https://dde-us-south.analytics.ibm.com/daas/',
        sessionCode: 'CDa4bb7fa3876253f85238',
        language: 'en',
        node: document.getElementById('containerDivId')
    });

window.api.initialize().then(function() {
    console.log('API created successfully.');
}, function(err) {
    console.log('Failed to create API. ' + err.message);


    window.onError = function(event) {
        console.log('onError:' + JSON.stringify(event));
    };
    window.api.on(CognosApi.EVENTS.REQUEST_ERROR, window.onError);
});

await this.api.initialize();
this.api.on(CognosApi.EVENTS.REQUEST_ERROR, this.onError);

window.api.dashboard.openDashboard({
    dashboardSpec: sampleSpec
}).then(
    function(dashboardAPI) {
        console.log('Dashboard created successfully.');
        window.dashboardAPI = dashboardAPI;
    }
).catch(
    function(err) {
        console.log(err);
    }
);

});



render() {
    return (
        <div id="analysis" />
    );
}
}
export default Map;

