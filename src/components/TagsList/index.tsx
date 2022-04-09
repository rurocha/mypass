import React, { useEffect, useState } from 'react'
import {
  Container,
  Tag,
  Label,
  LabelContainer,
} from './styles'
import {ITagsListProps, ITag} from './types'

export default function TagsList({
  tags,
  onPress,
}: ITagsListProps) {
  const [selectedTags, setSelectedTags] = useState<ITag[]>([])

  function handlePress(tag: ITag) {
    const alreadyExists = selectedTags.some((selectedTag) => selectedTag.key === tag.key)
    const filteredTags = selectedTags.filter((selectedTag) => selectedTag.key !== tag.key)

    if(alreadyExists) {
      const currentTag = selectedTags.find(({key}) => key === tag.key)

      setSelectedTags(
        [
          ...filteredTags, 
          {
            key: tag.key,
            label: tag.label,
            isChecked: !currentTag?.isChecked,
          }
        ]
      )
    } else {
      setSelectedTags([...selectedTags, {...tag, isChecked: !tag.isChecked}])
    }

    // setTagActive(tag)
    // onPress(tag)
  }
  useEffect(() => {
    onPress(selectedTags)
  }, [selectedTags])
  
  return (
    <Container>
      {tags.map((tag: ITag) => 
        <Tag 
          key={tag.key} 
          onPress={() => handlePress(tag)}
        >
          <LabelContainer 
            isActive={selectedTags.find(({key}) => key === tag.key)?.isChecked}
          >
            <Label>{tag.label}</Label>
          </LabelContainer>
        </Tag> 
      )}
    </Container>
  )
}