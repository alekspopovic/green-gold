const setCopyright = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  document.getElementById(
    "copyright"
  ).innerHTML = `Copyright &copy; Milunka Popović ${currentYear}`;
};

setCopyright();
