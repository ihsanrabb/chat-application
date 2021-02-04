import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {

  if(!sessionStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID="111ef933-c1c9-41b4-9276-59153b8b6df4"
      userName={sessionStorage.getItem('username')}
      userSecret={sessionStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App