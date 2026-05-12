import axios from "axios";
import config from "@/scripts/config";
import { GithubReponseType } from "types";

export const getGithubRepos = async (): Promise<GithubReponseType[]> => {
    const response = await axios.get<GithubReponseType[]>(
        `https://api.github.com/users/${config.author.github}/repos`
    );
    return response.data;
}