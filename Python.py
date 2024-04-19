import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.probability import FreqDist
import nltk
nltk.download('punkt')
nltk.download('stopwords')

def summarize_text(text, num_sentences=3):
    # Tokenize the text into sentences
    sentences = sent_tokenize(text)
    
    # Tokenize the text into words
    words = word_tokenize(text)
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    filtered_words = [word for word in words if word.lower() not in stop_words]
    
    # Calculate word frequency
    word_freq = FreqDist(filtered_words)
    
    # Assign a score to each sentence based on word frequency
    sentence_scores = {}
    for sentence in sentences:
        for word in word_tokenize(sentence.lower()):
            if word in word_freq:
                if len(sentence.split(' ')) < 30:
                    if sentence not in sentence_scores:
                        sentence_scores[sentence] = word_freq[word]
                    else:
                        sentence_scores[sentence] += word_freq[word]
    
    # Get top N sentences with highest scores
    top_sentences = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:num_sentences]
    
    # Join the top sentences to form the summary
    summary = ' '.join(top_sentences)
    
    return summary

# Example usage:
text = "Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process. This causes a chain reaction and creates a large amount of energy. This energy is converted into heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They generate energy that can cause explosions."

summary = summarize_text(text)
print(summary)
