import _ from 'lodash';


export class ConfigReducer {
    reduce(json, state) {
        let data = _.get(json, 'ethwatcher', false);
        if (data) {
            state.inbox = data.inbox;
        }
    }
}
