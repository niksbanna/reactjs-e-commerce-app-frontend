import React from 'react';
import CollectionItem from '../Collection-item/CollectionItem';
import './PreviewComponent.scss'

export default function PreviewComponent({ title, items }) {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => {
                        return (
                            <CollectionItem key={id} {...otherItemProps} />
                        );
                    })
                }
            </div>
        </div>
    )
}
