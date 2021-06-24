// Créditos Rafael Medeiros pela lógica do ID
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/45/commits/f4382d739e4b9dbf95e13fb7269c1bb23e7c5d4a#diff-ebd8554ec43b07366bd40d16b09d1d063d9e8d5921fa30de4eb80bffdf82668d

const THE_FIRST_ID_RETURNED_BY_UUID_NEEDS_TO_BE_0 = -1;
let id = THE_FIRST_ID_RETURNED_BY_UUID_NEEDS_TO_BE_0;
const uuid = () => {
  id += 1;
  return id;
};

export default uuid;
