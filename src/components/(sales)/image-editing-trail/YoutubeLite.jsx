export default function YoutubeLite({ videoId }) {
    return (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
            />
        </div>
    );
}
