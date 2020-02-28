import _ from 'lodash';


export class ConfigReducer {
    reduce(json, state) {
        let data = _.get(json, 'exampleapp', false);
        if (data) {
            state.inbox = data.inbox;
        }
    }
}
