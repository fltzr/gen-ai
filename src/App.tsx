import { applyMode, Mode } from '@cloudscape-design/global-styles';
import { useEffectOnce } from 'react-use';
import { Chat } from './views/chat';

function App() {
  useEffectOnce(() => {
    applyMode(Mode.Dark);
  });

  return <Chat />;
}

export default App;
