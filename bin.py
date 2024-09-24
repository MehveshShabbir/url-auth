import re
import whois
import requests
import socket
from urllib.parse import urlparse
from datetime import datetime

#* Extarcting 17 features out of a url 
def extract_url_features(url):
    #? Feature 1: Have_IP (1 if URL has an IP address)
    def has_ip(url):
        try:
            ip = socket.gethostbyname(urlparse(url).netloc)
            return 1
        except socket.error:
            return 0
    
    #? Feature 2: Have_At (1 if URL contains @)
    def has_at(url):
        return 1 if '@' in url else 0

    #? Feature 3: URL_Length (1 if URL Length > 54)
    def url_length(url):
        return 1 if len(url) > 54 else 0
    
    #?Feature 4: URL_Depth (number of '/' in the path)
    def url_depth(url):
        path = urlparse(url).path
        return path.count('/')
    
    #? Feature 5: Redirection (1 if // appears in the path)
    def redirection(url):
        return 1 if '//' in urlparse(url).path[1:] else 0
    
    #? Feature 6: https_Domain (1 if https in domain)
    def https_in_domain(url):
        return 1 if 'https' in urlparse(url).netloc else 0
    
    #? Feature 7: TinyURL (1 if URL uses a shortening service)
    shorteners = ['bit.ly', 'goo.gl', 'tinyurl', 'ow.ly', 't.co']
    def is_tiny_url(url):
        return 1 if any(shortener in urlparse(url).netloc for shortener in shorteners) else 0
    
    #? Feature 8: Prefix/ Suffix (1 if URL has '-' in domain)
    def has_prefix_suffix(url):
        return 1 if '-' in urlparse(url).netloc else 0
    
    #? Feature 9: DNS_Record (Simulated as 0)
    def dns_record(url):
        try:
            socket.hethostbyname(urlparse(url).netloc)
            return 1
        except:
            return 0
        
    #? Feature 10: Web Traffic (Simulated as 0)
    def web_traffic(url):
        return 0
    
    #? Feature 11: Domain_Age and 