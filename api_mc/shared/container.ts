import "reflect-metadata";
import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { PodcastService } from "../services/podcastService";
import { VideosService } from "../services/videosService";

container.register(
    "INewsService",{
        useClass: NewsService
    }
)

container.register(
    "IGaleriaService",{
        useClass: GaleriaService
    }
)

container.register(
    "IVideosService",{
        useClass: NewsService
    }
)

container.register(
    "IPodcastService",{
        useClass: PodcastService
    }
)