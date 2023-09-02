import React from 'react';

module.exports =  function Index({ data }) {
    const styles = {
        colorLightGray: { color: 'lightgray', fontWeight: 400 },
        marginTopBottom: { marginTop: '-1rem', marginBottom: '-0.5rem' },
        colorInherit: { color: 'inherit', textDecoration: 'none' },
        colorGray: { color: 'gray' },
    };

    return (
        <div style={styles.marginTopBottom}>
            <div className='row margin-top--md margin-bottom--sm'>
                {data.map(({ id, name, type, url, avatarUrl, username }) => (
                    <a
                        href={url}
                        target='_blank'
                        className='col col--6 authorCol_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthors-styles-module'
                        key={id}
                        style={styles.colorInherit}
                        rel='noreferrer'>
                        <div className='avatar margin-bottom--sm'>
                            <div className='avatar__photo'>
                                <img
                                    className='image_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthor-styles-module'
                                    src={avatarUrl}
                                    alt={`Avatar of ${name}`}
                                />
                            </div>
                            <div
                                className='avatar__intro'
                                itemProp='author'
                                itemScope=''
                                itemType='https://schema.org/Person'>
                                <div className='avatar__name'>
									<span itemProp='name'>
										{type === 'discord' ? (
                                            <span>
												{name}
                                                <span style={styles.colorLightGray}></span>
											</span>
                                        ) : (
                                            name
                                        )}
									</span>
                                </div>
                                <small className='avatar__subtitle' itemProp='description' style={styles.colorGray}>
                                    {type === 'discord' ? id : username}
                                </small>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
