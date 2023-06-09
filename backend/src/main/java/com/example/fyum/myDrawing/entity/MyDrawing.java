package com.example.fyum.myDrawing.entity;

import com.example.fyum.config.Painting;
import com.example.fyum.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
@DiscriminatorValue("MD")
@Setter
@NoArgsConstructor
@Getter
public class MyDrawing extends Painting {

    private String title;
    private String curation;
    private String description;


    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;


    @Builder
    public MyDrawing(Member member, String title, String description, String curation) {
        this.member = member;
        this.title = title;
        this.description = description;
        this.curation = curation;
    }
}
