# Youtube Comments Scraper

This python script allows you to scrap all the comments given a youtube video link and save them into a `csv` file.

## Pre-requisite
You will need to install [Postman](https://www.postman.com/) in order to make use of this app.


## Getting started

### Install dependencies
To install dependencies, run:
```bash
pip install -r requirements.txt
```

### Get google API key
Follow the instructions in this ![link](https://support.google.com/googleapi/answer/6158862?hl=en) to obtain the API key.

Specifically, in `Google API Console`, navigate to `YouTube Data API v3` and in the `credential` tab create an API key.

Make a `.env` file as follows:
```bash
cp .env.example .env
```
and fill in your API key in the file.

### Start up the app
```bash
set FLASK_APP=api.py
flask run
```
And now the app is listening on http://127.0.0.1:5000/.


## Using Postman
Now, open a new tab and select `POST` method on the address: `http://127.0.0.1:5000/getResult`

On the tab below, choose `Body` and select `raw` in `JSON` format.
Paste the following:
```json
{
    "url": "https://www.youtube.com/watch?v=kuhhT_cBtFU&t=2s&ab_channel=CNN"
}
```
And hit `Send` button.

Now, the `csv` file should be in the folder of `./data/`.

Enjoy!
