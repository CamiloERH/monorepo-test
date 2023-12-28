export default function Page(): JSX.Element {
  return (
    <main>
      <iframe src="https://medical.medismart.live" height="100%" width="100%" frameBorder="0" title="My Page">
        Your browser does not support iframes.
        <a href="https://medical.medismart.live" target="_blank" rel="noopener noreferrer">
          Click here to view the page directly.
        </a>
      </iframe>
    </main>
  );
}
