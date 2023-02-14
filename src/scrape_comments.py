import os
from src.get_video_id import get_video_id
from src.video_comments import video_comments

def scrape_comments(url):
    api_key = os.getenv('GOOGLE_API_KEY')
    video_id = get_video_id(url)
    return video_comments(video_id,api_key)
