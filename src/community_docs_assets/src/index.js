import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as community_docs_idl, canisterId as community_docs_id } from 'dfx-generated/community_docs';

const agent = new HttpAgent();
const community_docs = Actor.createActor(community_docs_idl, { agent, canisterId: community_docs_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await community_docs.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
