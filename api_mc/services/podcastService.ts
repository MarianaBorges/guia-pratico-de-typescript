import { IPodcastService } from "../contracts/IPodcastService";
import { Result } from "../infra/result";
import { Videos } from "../models/videos";
import { VideosRepository } from "../repository/videosRepository";

export class PodcastService implements IPodcastService{

    async get(_id:String): Promise<Videos>{
        let result = await VideosRepository.findById(_id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result<Videos>> {
        let result = new Result<Videos>;
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await VideosRepository.count({});
        result.Data = await VideosRepository.find({}).skip((page * qtd)-qtd).limit(qtd);
        return result;
    }
}