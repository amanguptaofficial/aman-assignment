# AXIOS Post Assignment

This Assignment demonstrates how to use Axios to interact with the Imgflip API to fetch and caption memes.

## Overview

The Assignment involves two main steps:
1. **Fetch all memes** using the Imgflip API.
2. **Caption a specific meme** by making a POST request with the required parameters.

## Steps

1. **Fetch All Memes**
   - Use a GET request to `https://api.imgflip.com/get_memes` to retrieve a list of all memes available on Imgflip.
   - This request will return a JSON object containing an array of meme templates with their respective IDs and other details.

2. **Fetch Memes By ID**
   - Use a GET request to `https://api.imgflip.com/get_memes/121121` for the get one meme

3. **Caption a Meme**
   - Choose a meme ID from the fetched list.
   - Make a POST request to `https://api.imgflip.com/caption_image` to caption the selected meme.
   - The POST request should include the following query parameters:
     - `template_id`: The ID of the meme template you want to caption.
     - `text0`: The text for the top caption.
     - `text1` (optional): The text for the bottom caption.
     - `username`: Use the username `chewie12345`.
     - `password`: Use the password `meme@123`.

## Example Response

The POST request to caption the meme will return a response containing a JSON object with URLs to the captioned meme:

```json
{
  "data": {
    "url": "https://i.imgflip.com/5mvxax.jpg",
    "page_url": "https://imgflip.com/i/5mvxax"
  }
}
 