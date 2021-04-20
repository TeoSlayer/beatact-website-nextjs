
import Link from 'next/link';

export function TopicList({ posts }) {
    return posts ? posts.map((post) => <Topic topic={post} />) : null;
}


function Topic({ topic }) {
        return (
            <>
            <div className="col-lg-4">
                <div className="card hover-shadow-lg hover-translate-y-n10">
                            <Link href={"/Blog/" + topic.slug}>
                            <img alt="Image placeholder" src={topic.coverImage.url} className="card-img-top" />
                            </Link>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">{topic.title}</a>
                                <h6 className="text-muted mt-4 mb-0">{topic.date}</h6>
                            </div>
                </div>
            </div>
            </>
        )
}


