import { FETCH_API } from '../common/def';

export default function update(value) {
  return {
    type: FETCH_API,
    payload: value,
  };
}
