/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SyncInboxContainer from "./SyncInboxContainer";

const containerStyle = css`
  padding: 40px;
  background: gray;
`;

function App() {
  return (
    <div css={containerStyle}>
      <header>
        <h3>Sync Inbox</h3>
      </header>
      <SyncInboxContainer />
    </div>
  );
}

export default App;
