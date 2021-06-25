const THE_FIRST_ID_RETURNED_BY_UUID_NEEDS_TO_BE_0 = -1;
let id = THE_FIRST_ID_RETURNED_BY_UUID_NEEDS_TO_BE_0;
const uuid = () => {
  id += 1;
  return id;
};

export default uuid;
