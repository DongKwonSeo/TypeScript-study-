{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetadata = Omit<Video, "url" | "title" | "data">;

  //   omit 빼줄 요소를 적어준다

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://",
      data: "byte-data",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
    };
  }

  //   omit 은 Pick과 반대로 뺴고 싶은 타입만 뺄수있다
}
