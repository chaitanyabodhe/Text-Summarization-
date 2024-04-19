import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.probability import FreqDist
import nltk

nltk.download('punkt')
nltk.download('stopwords')

def summarize_text(text, num_sentences=3):
    
    sentences = sent_tokenize(text)

    words = word_tokenize(text)

    stop_words = set(stopwords.words('english'))
    filtered_words = [word for word in words if word.lower() not in stop_words]

    word_freq = FreqDist(filtered_words)

    sentence_scores = {}
    for sentence in sentences:
        for word in word_tokenize(sentence.lower()):
            if word in word_freq:
                if len(sentence.split(' ')) < 30:
                    if sentence not in sentence_scores:
                        sentence_scores[sentence] = word_freq[word]
                    else:
                        sentence_scores[sentence] += word_freq[word]

    top_sentences = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:num_sentences]

    summary = ' '.join(top_sentences)

    return summary

text = input("Please enter the text:     ")
summary = summarize_text(text)
print("******************************************************")
print("The summarized text is:")
print(summary)
