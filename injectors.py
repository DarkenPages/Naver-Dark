import os


FILENAME = './naver-dark.orig.user.css'


def main():
    with open(FILENAME, 'r') as f:
        texts = f.read().splitlines()
    headers = []
    contents = []
    is_header = False
    done = False
    contains_homepage = False
    contains_update = False
    for i in range(len(texts)):
        text = texts[i]
        if not done:
            if text.startswith('/* ==UserStyle=='):
                is_header = True
            elif text.startswith('==/UserStyle== */'):
                is_header = False
                done = True

        if is_header:
            if text.startswith('@homepageURL'):
                contains_homepage = True
            if text.startswith('@updateURL'):
                contains_update = True
            headers.append(text)
        else:
            contents.append(text)

    print('Num of headers: {}'.format(len(headers)))
    print('Num of contents: {}'.format(len(contents)))
    
    if len(headers) == 0:
        print('Invalid num of headers. Failed')
        exit(1)
    if len(contents) == 0:
        print('Invalid num of contents. Failed')
        exit(1)
    
    if not contains_homepage:
        headers.append('@homepageURL \t\thttps://github.com/DarkenPages/Naver-Dark')
    if not contains_update:
        headers.append('@updateURL   \t\thttps://raw.githubusercontent.com/DarkenPages/Naver-Dark/master/naver-dark.user.css')
    
    with open(FILENAME, 'w') as f:
        f.write('{}\n'.format('\n'.join(headers)))
        f.write('{}\n'.format('\n'.join(contents)))

    print('Total {} lines of {} have been written'.format(len(headers) + len(contents), FILENAME))


if __name__ == '__main__':
    main()

