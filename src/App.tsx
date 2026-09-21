import { SlideController } from './components/SlideController';

function App() {
  // If the path is /store-preview, we could render a mock store.
  // For simplicity, we can do a simple routing switch here.
  const isStorePreview = window.location.pathname === '/store-preview';

  if (isStorePreview) {
    // Import dynamically or render a placeholder until we build it
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <h1 className="font-display text-4xl text-pine">Store Preview Mode</h1>
        <p className="font-body text-xl ml-4"><a href="/" className="underline text-berry">Back to Presentation</a></p>
      </div>
    );
  }

  return <SlideController />;
}

export default App;
