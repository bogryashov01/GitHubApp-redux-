import axios from 'axios';
 
export const getUserFromGitHub = (username) => {
   return axios.get(`https://api.github.com/users/${username}`)
}

export const getReposFromGitHub = (username) => {
   debugger
   return axios.get(`https://api.github.com/users/${username}/repos`)
}

export const getFollowersFromGitHub = (username) => {
   return axios.get(`https://api.github.com/users/${username}/followers`)
}