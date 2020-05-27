export default Page => {
  return () => (
    <div>
      <nav>
        <ul>...</ul>
      </nav>
      <main>
        <Page />
      </main>
    </div>
  );
};
