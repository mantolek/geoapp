export const checkInput = (searchUserIp: string, landedUserIP: string, setError: Function) => {

  // url or ip
  var urlOrIP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;

  if (!urlOrIP.test(searchUserIp)) {
    setError('IP or URL incorrect');
    return false;
  }

  // Due to api error search ip cant be same as ip of the user because it is already displaied onload
  if (searchUserIp === landedUserIP) {
    setError('IP must be different ');
    return false;
  }

  // If URL do nothing. Inform
  var url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  if (url.test(searchUserIp)) {
    setError('You typed URL');
    return false;
  }

  return true;
};
