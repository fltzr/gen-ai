import { Avatar, ChatBubble } from '@cloudscape-design/chat-components';
import {
  Box,
  ButtonGroup,
  PromptInput,
  SpaceBetween,
} from '@cloudscape-design/components';
import { nanoid } from 'nanoid';
import styles from './chat.module.css';

const messageStack: { message: string; type: 'incoming' | 'outgoing' }[] = [];
// [
//  message: "Hello", type: "outgoing" },
// { message: "Hi!", type: "incoming" },
// { message: "Are you AI?", type: "outgoing" },
// { message: "Yes!", type: "incoming" },
// { message: "Hi!", type: "outgoing" },
// { message: "Are you AI?", type: "incoming" },
// { message: "Yes!", type: "outgoing" },
// { message: "Hi!", type: "incoming" },
// { message: "Are you AI?", type: "outgoing" },
// { message: "Yes!", type: "incoming" },
// { message: "Hi!", type: "outgoing" },
// { message: "Are you AI?", type: "incoming" },
// { message: "Yes!", type: "outgoing" },
// { message: "Ok, thanks!", type: "incoming" },
// { message: "Anytime!", type: "outgoing" },
// { message: "Hello", type: "incoming" },
// { message: "Hi!", type: "outgoing" },
// { message: "Are you AI?", type: "incoming" },
// { message: "Yes!", type: "outgoing" },
// { message: "Ok, thanks!", type: "incoming" },
// { message: "Anytime!", type: "outgoing" },
// { message: "Hello", type: "incoming" },
// { message: "Hi!", type: "outgoing" },
// { message: "Are you AI?", type: "incoming" },
// { message: "Yes!", type: "outgoing" },
// { message: "Ok, thanks!", type: "incoming" },
// { message: "Anytime!", type: "outgoing" },
// { message: "Hello", type: "incoming" },
// { message: "Hi!", type: "outgoing" },
// { message: "Are you AI?", type: "incoming" },
// { message: "Yes!", type: "outgoing" },
// { message: "Ok, thanks!", type: "incoming" },
// { message: "Anytime!", type: "outgoing" },
// ];

export function Chat() {
  return (
    <div className={styles['chat-layout']}>
      {/* Chat Window */}
      <div className={styles['message-container']}>
        <Box padding={{ vertical: 'm', horizontal: 'l' }}>
          {messageStack.length > 0
            ? (
                <SpaceBetween size="m">
                  {messageStack.map(o => (
                    <ChatBubble
                      key={nanoid()}
                      avatar={(
                        <Avatar
                          ariaLabel={o.type === 'incoming' ? 'gen-ai' : 'user'}
                          color={o.type === 'incoming' ? 'gen-ai' : 'default'}
                          iconName={o.type === 'incoming' ? 'gen-ai' : 'user-profile'}
                        />
                      )}
                      type={o.type}
                      ariaLabel="chat"
                    >
                      {o.message}
                    </ChatBubble>
                  ))}
                </SpaceBetween>
              )
            : (
                <Box>No chat history... yet!</Box>
              )}
        </Box>
      </div>

      {/* Chat Input */}
      <div className={styles['prompt-container']}>
        <PromptInput
          disableSecondaryActionsPaddings
          placeholder="Message LLM"
          value=""
          actionButtonIconName="send"
          secondaryActions={(
            <Box padding={{ left: 'xxs', top: 'xs' }}>
              <ButtonGroup
                ariaLabel="Chat actions"
                items={[
                  {
                    type: 'icon-button',
                    id: 'copy',
                    iconName: 'upload',
                    text: 'Upload files',
                  },
                  {
                    type: 'icon-button',
                    id: 'expand',
                    iconName: 'expand',
                    text: 'Go full page',
                  },
                ]}
                variant="icon"
              />
            </Box>
          )}
        />
      </div>
    </div>
  );
}
